import { useAtom, atom } from 'jotai'

const atom1 = atom(false)

export const Test = () => {
  const [isTrue, setIsTrue] = useAtom(atom1)
  return (
    <div className="flex gap-3 items-center">
      <button
        className="button"
        onClick={() => setIsTrue((prevState) => !prevState)}
      >
        Toggle Local State!
      </button>
      <p>state: {isTrue ? 'true' : 'false'}</p>
    </div>
  )
}
