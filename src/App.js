import React from 'react'
import shortid from 'shortid'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const libraryRoutes = [
  {
      collapse: true,
      name: "1 Kütüphane",
      views: [{
          name: "1.1 Kütüphane Arama"
        },
        {
          name:"1.2 Kutuphane Popular"
        },
        {
          collapse:true,
          name:"1.3 Kutuphane Admin",
          views: [{
            name: "1.3.1 kullanıcı oluştur"
          },
          {
            collapse:true,
            name:"1.3.2 Profile",
            views:[{
              collapse:true,
              name: "1.3.2.1 User Profile",
              views:[
                {
                  name:"1.3.2.1.1 My Profile"
                },
                {
                  name:"1.3.2.1.2 Other Profile"
                }
              ]
            },{
              name:"1.3.2.2 Update Profile",
            }]
          }]
        }
    
      ]
  },
  {
    name: "2 Yönetim"
  }
]

class SidebarLinks extends React.Component {
  
  returnFragment = ( item, level ) => {
    level+=1
    return item.views.map(( secondItem )=>{
      return (
        (secondItem.collapse) ?
          this.constructListItem(secondItem, level)
        :
          <ListItem key={shortid.generate()} style={{paddingLeft:level*20+"px"}} >{"Level:"+level+" = "+secondItem.name}</ListItem>
      ) 
    }) 
  }

  constructListItem = ( item, level ) => {
    return (
      <List key={shortid.generate()}>
        <ListItem key={shortid.generate()} style={{paddingLeft:level*20+"px"}} >{"Level:"+level+" = "+item.name}</ListItem>
      {
        (item.collapse) ?
          this.returnFragment(item,level)
        :
          null
      }
      </List>
    )    
  }

  render(){
      return(
        <div>
          { libraryRoutes.map( ( item ) => this.constructListItem( item, 0 )) }
        </div>
      )
  }

}

export default SidebarLinks