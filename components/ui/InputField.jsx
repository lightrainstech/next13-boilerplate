import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { useController } from 'react-hook-form'

const InputField = ({
  control,
  name,
  otherProps = {},
  defaultValue = '',
  rules = {}
}) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: rules,
    defaultValue: defaultValue
  })

  return (
    <div>
      <FormControl
        label={() => (otherProps.label ? otherProps.label : '')}
        caption={() =>
          error ? (
            <span className="text-red-500 error-message">{error.message}</span>
          ) : otherProps.description ? (
            otherProps.description
          ) : null
        }
        overrides={{
          Label: {
            style: {
              color: 'rgba(255, 255, 255, 0.7)'
            }
          }
        }}>
        <Input
          {...{
            ...inputProps,
            ...otherProps,
            error,
            inputRef: ref
          }}
          overrides={{
            Root: {
              style: {
                paddingRight: 0,
                backgroundColor: '#272930',
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
            Input: {
              style: {
                backgroundColor: '#272930'
              }
            },
            StartEnhancer: {
              style: {
                backgroundColor: '#272930'
              }
            },
            EndEnhancer: {
              style: {
                backgroundColor: '#272930'
              }
            }
          }}
        />
      </FormControl>
    </div>
  )
}

export default InputField
