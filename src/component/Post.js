import React from 'react';

function Post(props) {

 

    return (
      <div style={{'color':'red','width':'200px','height':'20px','border':'solid 2px black','margin':'2px'}}>
        {props.content}
        </div>
      );
  }

  export default Post;