import { useAtom, atom } from 'jotai'

const atom1 = atom(false)

export const Test = () => {
  const [isTrue, setIsTrue] = useAtom(atom1)
  return (
    <div>
      <button onClick={() => setIsTrue((prevState) => !prevState)}>
        Toggle Local State!
      </button>
      <p>{isTrue ? 'true' : 'false'}</p>
    </div>
  )
}
