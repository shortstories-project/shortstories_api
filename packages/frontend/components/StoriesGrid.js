import React from 'react'
import { map, merge, concat } from 'ramda'
import { arrayOf, func, shape, string, bool } from 'prop-types'
import StoryItem from './StoryItem'
import Button from './Button'
import StoriesList from './styles/StoriesList'
import story from '../types/story'

function loadMoreStories(fetchMore, cursor) {
  fetchMore({
    variables: { cursor },
    updateQuery: (previousResult, { fetchMoreResult }) =>
      !fetchMoreResult
        ? previousResult
        : {
            stories: merge(fetchMoreResult.stories, {
              edges: concat(
                previousResult.stories.edges,
                fetchMoreResult.stories.edges
              ),
            }),
          },
  })
}

function StoriesGrid({ edges, pageInfo, fetchMore, userId }) {
  return (
    <StoriesList>
      {map(
        story => (
          <StoryItem
            isStoryOwner={userId === story.user.id}
            key={story.id}
            {...story}
          />
        ),
        edges
      )}
      {pageInfo.hasNextPage && (
        <Button
          onClick={() => {
            loadMoreStories(fetchMore, pageInfo.endCursor)
          }}
        >
          More
        </Button>
      )}
    </StoriesList>
  )
}

StoriesGrid.propTypes = {
  edges: arrayOf(story).isRequired,
  pageInfo: shape({
    endCursor: string.isRequired,
    hasNextPage: bool.isRequired,
  }).isRequired,
  fetchMore: func.isRequired,
  userId: string,
}

export default StoriesGrid
