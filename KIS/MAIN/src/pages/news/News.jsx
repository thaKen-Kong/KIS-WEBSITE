import { NavigationPages } from '../NavigationPage'
import { GridContainer, LinedLabel } from '../../components/utils/Container'
import { Card, NewsCard } from '../../components/utils/Card'
import { Pagination } from '../../components/utils/Pagination'
import { useEffect, useState } from 'react'
import { getNews } from '../../client/newsApi'

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
      <GridContainer className="news-grid">
        {newsList.length === 0 ? (<h1 className='no-news'>NO NEWS AVAILABLE..</h1>) : newsList.map((item, key) => (
          <NewsCard content={item} key={key} />
        ))}
      </GridContainer>
      <Pagination page={page} totalPages={5} onPageChange={(p) => setPage(p)} />
    </NavigationPages>
  )
}
