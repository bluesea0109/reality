import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { dataRequest } from 'modules/data/actions'
import { selectDataList } from 'modules/data/selectors'

import { DataTable } from 'componets'

const DataList = () => {
  const dispatch = useDispatch()
  const dataList = useSelector(selectDataList)

  useEffect(() => {
    dispatch(dataRequest())
  }, [dispatch])

  return (
    <>
      <DataTable dataList={dataList} />
    </>
  )
}

export default DataList
