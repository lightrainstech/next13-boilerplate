import { Button } from 'baseui/button'
import InputField from '../ui/InputField'
import { useForm } from 'react-hook-form'

export default () => {
  const { control } = useForm()

  return (
    <div className="grid grid-flow-row gap-3">
      <p className="text-white font-medium text-xl">Corporate Signup URL</p>

      <div className="rounded-xl bg-[#1b1c21] p-4">
        <InputField
          name="apiKey"
          control={control}
          otherProps={{
            label: 'Signup URL',
            readonly: true,
            value: 'www.goooooogle.com',
            endEnhancer: (
              <Button size="mini">
                <i className="ri ri-file-copy-line text-black mr-1" />
                Copy
              </Button>
            )
          }}
        />
      </div>
    </div>
  )
}
