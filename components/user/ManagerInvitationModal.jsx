import { Modal, ModalBody, ModalHeader, ROLE, SIZE } from 'baseui/modal'

import { Button } from 'baseui/button'
import InputField from '../ui/InputField'
import { useForm } from 'react-hook-form'

export default ({ isOpen, setIsOpen = () => {} }) => {
  const { control } = useForm()

  return (
    <Modal
      onClose={() => setIsOpen(false)}
      closeable
      isOpen={isOpen}
      animate
      autoFocus
      overrides={{
        Dialog: {
          style: {
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
        DialogContainer: {
          style: {
            backgroundColor: 'rgba(0,0,0,0.8)'
          }
        }
      }}
      size={SIZE.default}
      role={ROLE.dialog}>
      <ModalHeader>
        <p>Invite Manager</p>
        <p className="text-sm font-light text-white/50">
          Managers will have all the administrative permissions except adding
          new managers
        </p>
      </ModalHeader>
      <ModalBody className="grid grid-flow-row gap-4">
        <form
          className="grid grid-flow-row gap-4"
          onSubmit={e => e.preventDefault()}>
          <InputField
            name="email"
            control={control}
            otherProps={{
              label: 'Email address',
              placeholder: 'Enter email address to invite',
              endEnhancer: <i className="ri ri-mail-line text-white/30" />
            }}
          />
          <div className="flex gap-3">
            <Button
              kind="secondary"
              size="large"
              overrides={{
                BaseButton: {
                  style: {
                    width: '100%'
                  }
                }
              }}
              onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              size="large"
              overrides={{
                BaseButton: {
                  style: {
                    width: '100%'
                  }
                }
              }}
              endEnhancer={<i className="ri ri-mail-send-line" />}
              onClick={() => setIsOpen(false)}>
              Send Invite
            </Button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  )
}
