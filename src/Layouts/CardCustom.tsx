import Card from 'antd/lib/card'
import { IContentModel } from '../interfaces/interfaces'


export const CardCustom = ({ content }: { content: IContentModel }) => {

    const { title, description } = content

    return (
        <Card title={ title } bordered={ false }>
            { description }
        </Card>
    )

}