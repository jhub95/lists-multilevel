import React from 'react'
import shortid from 'shortid'
import { NavLink } from "react-router-dom"

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Collapse from '@material-ui/core/Collapse'


const libraryRoutes = [
  {
      collapse: true,
      name: "1 Library",
      id: shortid.generate(),
      views: [{
          name: "1.1 Library Search",
          path: "/library/search",
          id: shortid.generate(),
        },
        {
          name:"1.2 Popular Items",
          path:"/library/popular",
          id: shortid.generate(),
        },
        {
          collapse:true,
          id: shortid.generate(),
          name:"1.3 Library Admin",
          views: [{
            name: "1.3.1 Create Record",
            path: "/library/create",
            id: shortid.generate(),
          },
          {
            collapse:true,
            id: shortid.generate(),
            name:"1.3.2 Update",
            views:[{
              collapse:true,
              id: shortid.generate(),
              name: "1.3.2.1 Update Record",
              views:[
                {
                  id: shortid.generate(),
                  name:"1.3.2.1.1 Library Record",
                  path:"/library/updateLibraryRecord"
                },
                {
                  id: shortid.generate(),
                  name:"1.3.2.1.2 Outsourced Record",
                  path:"/library/updateOutsourceRecord"
                }
              ]
            },{
              id: shortid.generate(),
              name:"1.3.2.2 Update Stock",
              path:"/library/updateStock"
            }]
          }]
        }
    
      ]
  },
  {
    id: shortid.generate(),
    name: "2 Site Admin",
    path:"/admin"
  }
]

class CollapsibleList extends React.Component {
  state = {}

  openCollapse(listItemToCollapse) {
    this.setState((prevState)=>{
      if ( listItemToCollapse in prevState === false ){
        return { [listItemToCollapse]: true }
      } else {
        return { [listItemToCollapse]: !prevState[listItemToCollapse] }
      }
    })
  }

  listGenerator = ( item, level ) => {
    const ID = item.id
    return (
      <div key={ID+"1"} >
      <List key={ID+"100"}>
        <ListItem 
          to={ item.path ? item.path : '#'} 
          component={ item.path ? NavLink : null }  
          button 
          onClick={() => this.openCollapse(ID)} 
          key={ID} 
          style={{paddingLeft:level*20+"px"}} 
        >
          {"Level:"+level+" = "+item.name}
        </ListItem>
      {
        (item.collapse) ?
          (level+=1,
            <Collapse in={this.state[ID]}>
            {item.views.map(( secondItem )=>{
              const secondID = secondItem.id
              return (
                (secondItem.collapse) ?
                  this.listGenerator(secondItem, level)
                :
                  <ListItem 
                    to={ secondItem.path ? secondItem.path : '#'} 
                    component={ secondItem.path ? NavLink : null } 
                    key={secondID} 
                    style={{paddingLeft:level*20+"px"}} 
                  >
                    {"Level:"+level+" = "+secondItem.name}
                  </ListItem>
              ) 
            })}
            </Collapse>
          )
        :
          null
      }
      </List>
      </div>
    )    
  }

  render(){
      return(
        <div>
          { libraryRoutes.map( ( item ) => this.listGenerator( item, 0 )) }
        </div>
      )
  }

}

export default CollapsibleList