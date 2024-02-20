import React from 'react'
import loading from './loading.gif'

export default function Loading() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
  };
  return (
    <>
      <div style={styles.container}>
        <img src={loading} alt="Loading"></img>
      </div>
      
    </>
  )
}
