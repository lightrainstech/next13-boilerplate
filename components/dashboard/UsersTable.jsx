import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic'

import { Avatar } from 'baseui/avatar'
import InputField from '../ui/InputField'
import { Pagination } from 'baseui/pagination'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const DATA = [
    {
      foo: 10,
      bar: 'banana',
      url: 'https://example.com/b'
    },
    {
      foo: 1,
      bar: 'carrot',
      url: 'https://example.com/c'
    },
    {
      foo: 2,
      bar: 'apple',
      url: 'https://example.com/a'
    }
  ]

  const TableHeader = () => (
    <div className="sm:flex justify-between">
      <div className="grid grid-flow-row gap-2">
        <p className="text-white font-medium">Superhumans - Dummy table</p>
        <p>
          <span className="font-semibold text-white text-4xl">120</span>
          <span className="text-sm text-white/50">{' Active users'}</span>
        </p>
      </div>
      <form>
        <InputField
          name="searchQuery"
          control={control}
          otherProps={{
            placeholder: 'Search peoples',
            startEnhancer: <i className="ri ri-search-line text-white/40" />
          }}
        />
      </form>
    </div>
  )

  const UsersTable = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)

    return (
      <>
        <TableBuilder
          data={DATA}
          overrides={{
            Root: {
              style: {
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
                borderBottomRightRadius: '16px',
                borderBottomLeftRadius: '16px',
                borderTopWidth: '1px',
                borderRightWidth: '1px',
                borderBottomWidth: '1px',
                borderLeftWidth: '1px',
                borderTopStyle: 'solid',
                borderRightStyle: 'solid',
                borderBottomStyle: 'solid',
                borderLeftStyle: 'solid',
                borderTopColor: 'rgba(255, 255, 255, 0.1)',
                borderRightColor: 'rgba(255, 255, 255, 0.1)',
                borderBottomColor: 'rgba(255, 255, 255, 0.1)',
                borderLeftColor: 'rgba(255, 255, 255, 0.1)'
              }
            },
            TableHeadCell: {
              style: {
                backgroundColor: '#1B1C21',
                color: 'rgba(255, 255, 255, 0.3)'
              }
            },
            TableBody: {
              style: {
                backgroundColor: '#1B1C21'
              }
            },
            TableBodyCell: {
              style: {
                verticalAlign: 'center'
              }
            }
          }}>
          <TableBuilderColumn header="Employee">
            {row => (
              <div className="md:flex items-center gap-3 group">
                <Avatar
                  name="Jane Doe"
                  size="58px"
                  src="https://avatars.dicebear.com/api/human/yard.svg?width=285&mood=happy"
                />
                Alex morgan
              </div>
            )}
          </TableBuilderColumn>
          <TableBuilderColumn header="Points">{row => 120}</TableBuilderColumn>
          <TableBuilderColumn header="Distance covered">
            {row => <p>120 km</p>}
          </TableBuilderColumn>
          <TableBuilderColumn header="Ernings">
            {row => '139 LIMO'}
          </TableBuilderColumn>
          <TableBuilderColumn header="Last repair">
            {row => (
              <div className="flex items-center gap-3">
                <p>25 Dec</p>
                <i
                  className="ri ri-information-fill text-lg text-white/50 hover:text-white"
                  role="tooltip"
                />
              </div>
            )}
          </TableBuilderColumn>
        </TableBuilder>
        <div className="flex justify-center">
          <Pagination
            numPages={20}
            currentPage={currentPage}
            onPageChange={({ nextPage }) => {
              setCurrentPage(Math.min(Math.max(nextPage, 1), 20))
            }}
          />
        </div>
      </>
    )
  }

  return (
    <div className="grid grid-flow-row gap-4">
      <TableHeader />
      <UsersTable />
    </div>
  )
}
