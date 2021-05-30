import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../data/Store'

const Home = (props) => {
    const { text, number } = useContext(AppContext)

    return (
        <div className="Home">
            <PageTitle
                title="Módulo Hooks"
                subtitle="Hooks são uma nova adição ao React 16.8." />
            <SectionTitle title={text} />
            <span className="text">{number}</span>
        </div>
    )
}

export default Home