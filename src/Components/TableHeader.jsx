import ActionDropDown from "./ActionDropDown"

export const TeacherColumns = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "NAME",
    accessorFn: (row) => (`${row.first_name}${row.last_name}`)
  },
  {
    header: "Email",
    accessorKey: "email"
  },
  {
    header: "Gender",
    accessorKey: "gender",
    cell: ({ row }) => {
      const { gender } = row.original
      return <p className={`${gender === "Male" ? "text-red-500" : "text-blue-500"}`}>{gender}</p>
    }
  },
  {
    header: "DOB",
    accessorKey: "dob",
  },
  {
    header: "Action",
    id: "action",
    cell: ({ row }) => {
      const { id } = row.original
      return <ActionDropDown id={id} />
    }
  }
]