import React from 'react'
import { Modal } from 'antd'
import { useDispatch } from 'react-redux'
import { CloseCircleOutlined } from '@ant-design/icons'
const SimpleModal = (props) => {
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch({
      type: 'Hide_Modal',
      ModalName: props.modalFor,
      payload: null,
    })
  }

  return (
    <Modal
      visible={props.visible}
      closeIcon={<CloseCircleOutlined />}
      centered
      onCancel={() => closeModal()}
      footer={true}
      title={props.title}
      width={props.width}
      closable={props.closable}
      maskClosable={false}
      destroyOnClose={props.destroyOnClose || false}
      className={props.className}
      style={props.style}
    >
      {props.children}
    </Modal>
  )
}

export default SimpleModal
