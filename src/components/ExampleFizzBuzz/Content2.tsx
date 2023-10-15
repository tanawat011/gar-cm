type TableDataProps = {
  data: number | string
}

const TableData: React.FC<TableDataProps> = ({ data }) => {
  return (
    <td className='border border-solid dark:border-neutral-500 whitespace-nowrap px-6 py-0.5'>
      {data}
    </td>
  )
}

const TableHead: React.FC<TableDataProps> = ({ data }) => {
  return (
    <th
      scope='col'
      className='border border-solid dark:border-neutral-500 whitespace-nowrap px-6 py-0.5 font-medium'
    >
      {data}
    </th>
  )
}

type TableRow = {
  input: string | number
  result: string | number
  head?: boolean
}

const TableRow: React.FC<TableRow> = ({ input, result, head }) => {
  if (head) {
    return (
      <tr>
        <TableHead data={input} />
        <TableHead data={result} />
      </tr>
    )
  }

  return (
    <tr>
      <TableData data={input} />
      <TableData data={result} />
    </tr>
  )
}

export const Content2 = () => {
  return (
    <div>
      <h1 className='text-xl'>FizzBuzz</h1>
      <br />
      <p className='leading-6 mb-4'>
        ให้เขียน function ที่รับค่าตัวเลข 1 ตัว แล้ว return ค่าตามเงื่อนไขดังนี้
        <p>- ถ้าเลขนั้นหาร 3 ลงตัว ให้ return Fizz</p>
        <p>- ถ้าเลขนั้นหาร 5 ลงตัว ให้ return Buzz</p>
        <p>- ถ้าเลขนั้นหารทั้ง 3 และ 5 ลงตัว ให้ return FizzBuzz</p>
        <p>- ถ้าเลขนั้นไม่ได้หารทั้ง 3 และ 5 ลงตัว ให้ return เลขนั้นเอง</p>
      </p>

      <div className='w-full flex flex-col items-center'>
        <table className='text-left text-sm font-light'>
          <thead className='font-medium'>
            <TableRow input='Input' result='Result' head />
          </thead>
          <tbody>
            <TableRow input={1} result={1} />
            <TableRow input={2} result={2} />
            <TableRow input={3} result='Fizz' />
            <TableRow input={4} result={4} />
            <TableRow input={5} result='Buzz' />
            <TableRow input={6} result='Fizz' />
            <TableRow input={7} result={7} />
            <TableRow input={8} result={8} />
            <TableRow input={9} result='Fizz' />
            <TableRow input={10} result='Buzz' />
            <TableRow input={11} result={11} />
            <TableRow input={12} result='Fizz' />
            <TableRow input={13} result={13} />
            <TableRow input={14} result={14} />
            <TableRow input={15} result='FizzBuzz' />
            <TableRow input={16} result={16} />
            <TableRow input={21} result='Fizz' />
            <TableRow input={30} result='FizzBuzz' />
          </tbody>
        </table>
      </div>
    </div>
  )
}
