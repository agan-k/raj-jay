import React from 'react'
import {Layout} from '../components'

export default function formSubmission() {
   return (
      <Layout>
         <div style={{display: "flex", justifyItems: 'center', alignItems: "center", minHeight: "80vh", textAlign: "center", transition: "2s"}}>
            <p style={{display: "block", width: "100%", textAlign: "center"}}>Successfully submitted!..</p>
         </div>
      </Layout>
   )
}
