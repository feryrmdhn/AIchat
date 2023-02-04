import { NextPage } from "next"
import Head from "next/head"
import { Inter } from "@next/font/google"
import styles from '@/styles/Home.module.css'
import { Box, Button } from "@mui/material"

const inter = Inter({ subsets: ['latin'] })

const Description: NextPage = () => {
    return (
        <>
            <Head>
                <title>{`Fery's AI | Description`}</title>
            </Head>
            <Box className={styles.backBtnWrapper}>
                <Button style={{textTransform: 'capitalize'}} onClick={() => window.history.back()}>Back</Button>
            </Box>
            <main className={styles.descWrapper}>
                <h3 className={`${inter.className} ${styles.desc}`}>
                    Note : This AI is made using the API from openAI, it is the chatGPT platform, <br />
                    if there are any deficiencies it is because this is still in the testing phase or BETA version.
                </h3>
                <p style={{textAlign: 'center'}}>Only as a portfolio and can also help with some small assignments</p>
            </main>
        </>
    )
}

export default Description;