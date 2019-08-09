import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(function () {
    window.fetch('https://petgram-server-cazaustre-41l1j4pp2.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  return (
    <List>
      {
        categories.map(category => <Item key={category}><Category {...category} /></Item>)
      }
    </List>
  )
}
