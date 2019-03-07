import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const libraryRoutes = [
  {
      collapse: true,
      name: "1 Kütüphane",
      views: [{
          path: "/kutuphane",
          name: "1.1 Kütüphane Arama"
        },
        {
          collapse:true,
          name:"1.2 Kutuphane Admin",
          views: [{
            name: "1.2.1 kullanıcı oluştur"
          },
          {
            collapse:true,
            name:"1.2.2 Profile",
            views:[{
              collapse:true,
              name: "1.2.2.1 User Profile",
              views:[
                {
                  name:"1.2.2.1.1 My Profile"
                },
                {
                  name:"1.2.2.1.2 Other Profile"
                }
              ]
            },{
              name:"1.2.2.2 Update Profile",
            }]
          }]
        }
    
      ]
  },
  {
    path: "-admin",
    name: "2 Yönetim",
    state: "openAdmin",
    icon: "build",
    component: <div>Admin</div>
    
  }
]

class SidebarLinks extends React.Component {

  constructListItem = ( item, key, level ) => {
    return (
      <List key={key*1000}>
        <ListItem key={key} style={{paddingLeft:level*20+"px"}} >{"Level:"+level+" = "+item.name}</ListItem>
      {
        (item.collapse) ?
          item.views.map((secondItem,secondKey)=>{
            if (secondItem.collapse)  {
              return this.constructListItem(secondItem,secondKey,level+=1)
            }
            else return <ListItem style={{paddingLeft:level*20+"px"}} key={secondKey*2000} >{secondItem.name}</ListItem>
          }) 
        :
        null
      }
      </List>
    )    
  }

    render(){
        // const { classes, color, logo, image, logoText, routes, bgColor, rtlActive,  t } = this.props
        return(
          <div>
            { libraryRoutes.map( ( item, key ) => this.constructListItem( item, key, 0 )) }
          </div>
        )
    }

}

export default SidebarLinks