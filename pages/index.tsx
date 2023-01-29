import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { OpenAIApi } from 'openai'
import { configuration } from '@/utils'
import { ChangeEvent, FormEvent, useState } from 'react'
import { NextPage } from 'next'
import { GlobalTypes } from '@/types'
import { Box, Button, CircularProgress, TextareaAutosize } from '@mui/material'
import { Typography } from '@mui/material';

const Home: NextPage<GlobalTypes> = () => {
  const openai = new OpenAIApi(configuration)

  const [prompt, setPrompt] = useState<string>('')
  const [result, setResult] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  console.log(process.env.REACT_APP_OPENAI_API_KEY)

  const handleClick = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 100
      })
      setResult(res.data.choices[0].text as string)
    }
    catch (err: any){
      alert(err.response.data.error.type)
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>{`Fery's AI`}</title>
        <meta name="description" content="Fery's AI chat by openAi chatGPT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Box style={{textAlign: 'center'}}>
          <Typography variant="h4">{`Fery's AI chat`}</Typography>
          <Link href='/description'>About</Link>
        </Box>
        <form>
          <TextareaAutosize
            aria-label="minimum height"
            value={prompt}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)}
            minRows={3}
            maxRows={5}
            placeholder="Type here..."
            style={{ width: '100%' , padding: 15}}
          />
          <Button
            variant="outlined"
            style={{marginTop: '20px'}}
            className={styles.btn}
            onClick={handleClick}
            type='submit'
          >
            {isLoading ? <CircularProgress size='25px' /> : 'submit'}
          </Button>
        </form>
        <Typography variant='inherit' lineHeight='22px' className={styles.fonts}>
          {result}
        </Typography>
      </main>
    </>
  )
}

export default Home;
