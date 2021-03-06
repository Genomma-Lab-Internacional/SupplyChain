import React, {useState} from "react"
import axios from "axios"
import { Table, Divider, Tag, Button, message} from 'antd';

export default function GenommaValidation () {
  const [ SKUA, setSKUA ] = useState([])
  const [ quantity, setQuantity ] = useState([])
  const [ description, setDescription ] = useState([])
  const [ ID_provider, setID_provider ] = useState([])
  const [ provider,setProvider ] = useState({})
  const [ dataSize, setDataSize ] = useState([])

  const selectProvider = (e) => {
    provider[e.target.name] = e.target.value
    axios.get(`https://6h0ifo0736.execute-api.us-east-1.amazonaws.com/dev/genommalab/supplychain/get-data-provider/${provider.provider}`)
      .then( success => {
        console.log(success)
        message.success('This is a success message')
        for(let i=0; i<success.data.provider.length; i++) {
          ID_provider.push(Object.values(success.data.provider[i])[0])
          SKUA.push(Object.values(success.data.provider[i])[1])
          description.push(Object.values(success.data.provider[i])[2])
          quantity.push(Object.values(success.data.provider[i])[3])
          // setSKUA([SKUA])
        }
        dataSize.push(success.data.provider.length)
        console.log(dataSize,provider)
      })
      .catch( error => console.log(error),
      message.error('This is an error message') )

      // axios.get(`https://6h0ifo0736.execute-api.us-east-1.amazonaws.com/dev/genommalab/supplychain/get-data-master-inventario/${provider.provider}`)
      // .then( success => {
      //   console.log(success)
      // })
      // .catch( error => console.log(error) )
    }
    // const success = () => {
    //   message.success('This is a success message');
    // };
    // const error = () => {
    //   message.error('This is an error message');
    // };

    const sendDataToMasterInventario = () => {
      axios.post("https://6h0ifo0736.execute-api.us-east-1.amazonaws.com/dev/genommalab/supplychain/add-data-master-inventario",
      {SKUA,quantity,description,ID_provider,dataSize,provider})
      .then( success =>
        console.log(success)
      )
      .catch( error => 
        console.log(error) 
        )
    }

    

    return (
      <div>
        <div className="body-gen">
          <h1>Genomma Lab</h1>
          <div className="cont-gen">
          <select onChange={selectProvider} name="provider">
            <option>Selecciona el proveedor...</option>
            <option value="Albek">Albek</option>
            <option value="Provider2">Proveedor 2</option>
            <option value="Provider3">Proveedor 3</option>
            <option value="Provider4">Proveedor 4</option>
            <option value="Provider5">Proveedor 5</option>
          </select>
          
          <Button onClick={sendDataToMasterInventario}>Enviar a Genommalab</Button>
          </div>
          <div className="gen-img">
          <img href="" src={require('../assets/logo2.png')}/>
          </div>
          
        </div>
          
        <table>
          <tbody>
            {SKUA.map( s => <tr>{s}</tr> )}
          </tbody>
        </table>
      </div>
    )
}

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: text => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: tags => (
//       <span>
//         {tags.map(tag => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </span>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (text, record) => (
//       <span>
//         <a>Invite {record.name}</a>
//         <Divider type="vertical" />
//         <a>Delete</a>
//       </span>
//     ),
//   },
// ];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];