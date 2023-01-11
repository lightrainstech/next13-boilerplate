import { Button } from 'baseui/button'
import InputField from '../ui/InputField'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default () => {
  const { control } = useForm()

  const [apiKey, setApiKey] = useState(
    useSelector(state => state?.store?.user?.key || '')
  )
  const [apiSecret, setApiSecret] = useState(
    useSelector(state => state?.store?.user?.secret || '')
  )

  return (
    <div>
      <p className="text-white font-medium text-xl mb-3">API Credentials</p>
      <div className="rounded-xl bg-[#1b1c21] grid grid-flow-row gap-3 p-4">
        <InputField
          name="apiKey"
          control={control}
          otherProps={{
            label: 'Key',
            readonly: true,
            value: apiKey,
            disabled: !apiKey,
            endEnhancer: (
              <Button size="mini">
                <i className="ri ri-file-copy-line text-black mr-1" />
                Copy
              </Button>
            )
          }}
        />
        <InputField
          name="apiSecret"
          control={control}
          otherProps={{
            label: 'Secret',
            readonly: true,
            type: 'password',
            value: apiSecret,
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
