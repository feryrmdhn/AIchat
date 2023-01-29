import { NextPage } from "next"
import Head from "next/head"
import { Inter } from "@next/font/google"
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const Description: NextPage = () => {
    return (
        <>
            <Head>
                <title>{`Fery's AI | Description`}</title>
            </Head>
            <main className={styles.main}>
                <h3 className={`${inter.className} ${styles.desc}`}>
                    This AI is made using the API from openAI, it is the chatGPT platform, <br />
                    if there are any deficiencies it is because this is still in the testing phase or BETA version.
                </h3>
            </main>
        </>
    )
}

export default Description;