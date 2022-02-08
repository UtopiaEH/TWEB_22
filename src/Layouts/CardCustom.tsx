import Card from 'antd/lib/card'

export const CardCustom = ({ title, description }: { title: string, description: string }) => {
    
    return (
        <Card title={ title } bordered={ false }>
            { description }
        </Card>
    )

}