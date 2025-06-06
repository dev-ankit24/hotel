import React from 'react'
import {Helmet} from "react-helmet";

export default function HelmetLayout({title, description, pageLink,childern }) {
  return (
    <>
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="canonical" href={pageLink} />
                <meta name="description" content={description} />
                
            </Helmet>
            {childern}

    </div>
    </>
  )
}
