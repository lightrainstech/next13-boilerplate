import { Avatar } from 'baseui/avatar'
import InputField from '../ui/InputField'
import { useForm } from 'react-hook-form'

export default () => {
  const { control } = useForm()
  return (
    <div className="rounded-xl p-4 bg-[#1b1c21] grid grid-flow-row gap-6">
      <div>
        <Avatar
          name="Jane Doe"
          size="68px"
          src="https://avatars.dicebear.com/api/human/yard.svg?width=285&mood=happy"
        />
        <p className="text-white text-xl font-medium">Jasmine Kylian</p>
      </div>

      <div>
        <InputField
          name="name"
          control={control}
          otherProps={{
            label: 'Name',
            placeholder: 'Enter name'
          }}
          rules={{
            required: {
              value: true,
              message: 'Name is required'
            }
          }}
        />
        <InputField
          name="email"
          control={control}
          otherProps={{
            label: 'Email address',
            placeholder: 'Enter email address'
          }}
          rules={{
            required: {
              value: true,
              message: 'Email is required'
            }
          }}
        />
      </div>
    </div>
  )
}
