import s from 'sin'
import './cases/case-1.ts'
import './cases/case-2.ts'
// import './cases/case-3.ts'

export default s.mount(() => {

  return () => s`h1`('Welcome to sin')
})
