import type { useDisclosure } from '@nextui-org/react'

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'

import { Button } from '../Button'

type ModalFormProps = {
  title?: string
  onSubmit?: () => void
  renderForm: () => React.ReactNode
} & ReturnType<typeof useDisclosure>

export const ModalForm: React.FC<ModalFormProps> = ({ title, ...props }) => {
  return (
    <Modal isOpen={props.isOpen} placement='center' onOpenChange={props.onOpenChange} onClose={props.onClose}>
      <ModalContent>
        <form onSubmit={props.onSubmit}>
          <ModalHeader>{title || 'Form'}</ModalHeader>

          <ModalBody>{props.renderForm()}</ModalBody>

          <ModalFooter>
            <Button label='Close' color='danger' variant='light' onPress={props.onClose} />
            <Button label='Submit' color='primary' type='submit' />
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
