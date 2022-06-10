import { Button } from '@mui/material'

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!
      <Button>Hello!</Button>
    </section>
  )
}
