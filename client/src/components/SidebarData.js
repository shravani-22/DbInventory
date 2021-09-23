import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as DiIcons from 'react-icons/di';
import * as SiIcons from 'react-icons/si';
export const SidebarData=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        path:"/home",
        cName:'nav-text'
     },
     {
      title:"Application",
      icon:<AiIcons.AiTwotoneAppstore/>,
      path:"/application",
      cName:'nav-text'
   },

     {
        title:"Inventory",
        icon:<FaIcons.FaDatabase/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
         iconOpened: <RiIcons.RiArrowUpSFill />,
        path:"/inventory",
        cName:'nav-text',
       subNav:[
         {title:"MySQL",
         path:"/inventory/mysql",
         icon:<SiIcons.SiMysql/>,
          },
          {title:"MSSQL",
         path:"/inventory/mssql",
         icon:<SiIcons.SiMicrosoftsqlserver/>,
          },
          {title:"Oracle",
          path:"/inventory/oracle",
          icon:<SiIcons.SiOracle/>,
           },
         
           {title:"MongoDb",
           path:"/inventory/mongodb",
           icon:<DiIcons.DiMongodb/>,
            },
            {title:"Postgresql",
            path:"/inventory/postgresql",
            icon:<SiIcons.SiPostgresql/>,
             },

        ]
     },
     {
        title:"Analytics",
        icon:<FaIcons.FaGlobe/>,
        path:"/analytics",
        cName:'nav-text'
     },
     {
      title:"Feedback",
      icon:<RiIcons.RiFeedbackFill/>,
      path:"/feedback",
      cName:'nav-text'
   }

]


