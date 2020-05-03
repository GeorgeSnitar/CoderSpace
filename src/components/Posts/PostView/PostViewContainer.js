import React from 'react';
import PostView from './PostView';
import { useStaticQuery, graphql } from 'gatsby';


const getView = graphql`
query MyView {
  allContentfulPostView {
    edges {
      node {
        viewText {
          viewText
        }
        viewImagine {
          resolutions {
            src
          }
        }
        id
      }
    }
  }
}
`

const PostViewContainer = (props) => {
 const response = useStaticQuery(getView);
 const views = response.allContentfulPostView.edges;
 let result = views.map((view) => (
   <li key={view.node.id}>
           <PostView 
           viewImage={view.node.viewImagine.resolutions.src}
           viewText={view.node.viewText.viewText} />
   </li>
 ))
   
  function ViewSlicer(i){
    return result[i]
  }
  
  return (
   <div>
     <ul>
       {ViewSlicer(props.viewSlice)}
     </ul>
   </div>
  )
}

export default PostViewContainer;