import * as React from 'react'

interface IProps {
  active: boolean
}

export default function ViewIcon({ active }: IProps) {
  if (active) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 59.2 59.2"
        width="24"
        height="24"
      >
        <path d="M51.062,21.561c-5.759-5.759-13.416-8.931-21.561-8.931S13.7,15.801,7.941,21.561L0,29.501l8.138,8.138 c5.759,5.759,13.416,8.931,21.561,8.931s15.802-3.171,21.561-8.931l7.941-7.941L51.062,21.561z M49.845,36.225 c-5.381,5.381-12.536,8.345-20.146,8.345s-14.765-2.963-20.146-8.345l-6.724-6.724l6.527-6.527 c5.381-5.381,12.536-8.345,20.146-8.345s14.765,2.963,20.146,8.345l6.724,6.724L49.845,36.225z" />
        <path d="M29.572,16.57c-7.168,0-13,5.832-13,13s5.832,13,13,13s13-5.832,13-13S36.741,16.57,29.572,16.57z M29.572,24.57 c-2.757,0-5,2.243-5,5c0,0.552-0.448,1-1,1s-1-0.448-1-1c0-3.86,3.14-7,7-7c0.552,0,1,0.448,1,1S30.125,24.57,29.572,24.57z" />
      </svg>
    )
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 59.2 59.2"
      width="24"
      height="24"
    >
      <path d="M51.062,21.561c-11.889-11.889-31.232-11.889-43.121,0L0,29.501l8.138,8.138c5.944,5.944,13.752,8.917,21.561,8.917 s15.616-2.972,21.561-8.917l7.941-7.941L51.062,21.561z M49.845,36.225c-11.109,11.108-29.184,11.108-40.293,0l-6.724-6.724 l6.527-6.527c11.109-11.108,29.184-11.108,40.293,0l6.724,6.724L49.845,36.225z" />
      <path d="M28.572,21.57c-3.86,0-7,3.14-7,7c0,0.552,0.448,1,1,1s1-0.448,1-1c0-2.757,2.243-5,5-5c0.552,0,1-0.448,1-1 S29.125,21.57,28.572,21.57z" />
      <path d="M29.572,16.57c-7.168,0-13,5.832-13,13s5.832,13,13,13s13-5.832,13-13S36.741,16.57,29.572,16.57z M29.572,40.57 c-6.065,0-11-4.935-11-11s4.935-11,11-11s11,4.935,11,11S35.638,40.57,29.572,40.57z" />
    </svg>
  )
}
