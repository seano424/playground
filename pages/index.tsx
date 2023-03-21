import Button from '../components/Button'

export default function Home() {
  return (
    <div className="py-base container grid gap-10 border-8 border-green-200">
      <section className="grid grid-cols-5 border-8 border-orange-200">
        <div className="aspect-square border-8 border-yellow-200"></div>
        <div className="aspect-square border-8 border-yellow-200"></div>
        <div className="aspect-square border-8 border-yellow-200"></div>
        <div className="aspect-square border-8 border-yellow-200"></div>
      </section>
      <section className="wrapper">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </section>

      <Button onClick={() => alert('hello')} variant="outline" size="large">
        hello
      </Button>
    </div>
  )
}
