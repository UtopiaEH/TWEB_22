import { Button, Form, Input, InputNumber } from 'antd'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { useRootStore } from '../../index'

export const CustomForm = observer(() => {

    const { forms_custom: { name, getAge, intro, setName, setAge, setIntro, submitForm } } = useRootStore()

    return (
        <Form name='nest-messages'>
            <Form.Item
                label='Name'
                rules={ [
                    {
                        required: true
                    }
                ] }
            >
                <Input value={ name } onChange={ (e) => setName(e.target.value) } />
            </Form.Item>

            <Form.Item
                label='Age'
                rules={ [
                    {
                        type: 'number',
                        min: 0,
                        max: 99
                    }
                ] }
            >
                <InputNumber value={ getAge } onChange={ (num) => setAge(num) } />
            </Form.Item>

            <Form.Item
                label='Introduction'
            >
                <Input.TextArea value={ intro } onChange={ (e) => setIntro(e.target.value) } />
            </Form.Item>
            <Form.Item>
                <Button type='primary' onClick={ submitForm }>
                    Submit
                </Button>
            </Form.Item>
        </Form>

    )
})