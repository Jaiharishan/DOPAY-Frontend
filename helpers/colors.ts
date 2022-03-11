const colors: string[] = [
  'bg-red-300',
  'bg-orange-300',
  'bg-amber-300',
  'bg-yellow-300',
  'bg-lime-300',
  'bg-teal-300',
  'bg-green-300',
  'bg-emerald-300',
  'bg-sky-300',
  'bg-blue-300',
  'bg-fuschia-300',
]

const randomColors = (): string => {
  return colors[Math.floor(Math.random() * (colors.length - 1))]
}

export default randomColors
