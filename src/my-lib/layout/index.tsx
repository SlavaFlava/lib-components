import styled from 'styled-components'

interface IRow {
  py: number,
  cs?: object,
}

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: auto;
  padding: 0 15px;
`

export const Row = styled.div<IRow>`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: ${(props) => props.py}px 0;
`