import { NavigationPages } from '../NavigationPage'
import { GridContainer, Label, LinedLabel } from '../../components/utils/Container'
import { Card, NewsCard } from '../../components/utils/Card'
import { Pagination } from '../../components/utils/Pagination'
import { useEffect, useState } from 'react'
import { getNews } from '../../client/newsApi'
import { Loading } from '../../components/utils/Loading'

export function NewsPage() {
  const [newsList, setNewsList] = useState([])
  const [page, setPage] = useState(0)

  useEffect(()=>{
    
  }, [page])

  
  
  useEffect(() => {
    getNews().then(news => {setNewsList(news)})
    return (() => {})
  }, [])


  return (
    <NavigationPages title="News">
      <LinedLabel text="NEWS LIST" className='enlarged'/>
      <GridContainer>
        {newsList.length === 0 ? (<Loading />) : newsList.map((item, key) => (
          <NewsCard content={item} key={key} />
        ))}
        </GridContainer>
      <Pagination page={page} totalPages={1} onPageChange={(p) => setPage(p)} />
    </NavigationPages>
  )
}
