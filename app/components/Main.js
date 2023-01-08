import React from 'react'
import CreateForm from './CreateForm'
import ReportTable from './ReportTable'

export default function Main() {
  return (
    <div >

      <div class="flex flex-row-reverse 2 ">
        <CreateForm />
      </div>
      
      <div class="w-full">
        <ReportTable />
      </div>

    </div>
  )
}