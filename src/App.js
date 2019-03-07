import React from 'react'
import shortid from 'shortid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Collapse from '@material-ui/core/Collapse'


const libraryRoutes = [
  {
      collapse: true,
      name: "1 Kütüphane",
      id: shortid.generate(),
      views: [{
          name: "1.1 Kütüphane Arama",
          id: shortid.generate(),
        },
        {
          name:"1.2 Kutuphane Popular",
          id: shortid.generate(),
        },
        {
          collapse:true,
          id: shortid.generate(),
          name:"1.3 Kutuphane Admin",
          views: [{
            name: "1.3.1 kullanıcı oluştur",
            id: shortid.generate(),
          },
          {
            collapse:true,
            id: shortid.generate(),
            name:"1.3.2 Profile",
            views:[{
              collapse:true,
              id: shortid.generate(),
              name: "1.3.2.1 User Profile",
              views:[
                {
                  id: shortid.generate(),
                  name:"1.3.2.1.1 My Profile"
                },
                {
                  id: shortid.generate(),
                  name:"1.3.2.1.2 Other Profile"
                }
              ]
            },{
              id: shortid.generate(),
              name:"1.3.2.2 Update Profile",
            }]
          }]
        }
    
      ]
  },
  {
    id: shortid.generate(),
    name: "2 Yönetim"
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
        <ListItem button onClick={() => this.openCollapse(ID)} key={ID} style={{paddingLeft:level*20+"px"}} >{"Level:"+level+" = "+item.name}</ListItem>
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
                  <ListItem button key={secondID} style={{paddingLeft:level*20+"px"}} >{"Level:"+level+" = "+secondItem.name}</ListItem>
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