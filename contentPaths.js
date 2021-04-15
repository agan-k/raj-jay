   export default function getContentPaths(currentContentType) {
      const path = currentContentType.map(result => 
         result.data.content_type.substr(0, 5)
         );
      return path[0];
   }