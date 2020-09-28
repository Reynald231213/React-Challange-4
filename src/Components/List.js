import React, {Component} from "react";  
import $ from "jquery";
class List extends Component { 
constructor(){  
    super();  
    this.state = {  
    belanja : [  
        {id: "1", nama: "Petek", jumlah: "2 ekor"},  
        {id: "2", nama: "Gorengan", jumlah: "1 plastik"},  
        {id: "3", nama: "Sabon", jumlah: "1 dos"},  
    ],  
    id: "",  
    nama: "",  
    jumlah: "",
    action: "" 
    } 
}
bind = (event) => {  
	this.setState({[event.target.name]: event.target.value});  
  }  
	
  Simpan = (event) =>{  
	event.preventDefault();   
	let temp = this.state.belanja;  
	
	if (this.state.action === "insert") {  
	  temp.push({  
		id: this.state.id,  
		nama: this.state.nama,  
		jumlah: this.state.jumlah  
	  });  
	} else if (this.state.action === "update") {  
	  let index = temp.findIndex(item => item.id === this.state.id);  
	  [index].nama = this.state.nama;  
	  temp[index].jumlah = this.state.jumlah;  
	} 

	this.setState({belanja: temp});  
	$("#modal").modal('hide');  
  }  
	
  Add = () => {  
	$("#modal").modal('show'); 
	this.setState({  
	  id: "",  
	  nama: "",  
	  jumlah: "",  
	  action: "insert"  
	});  
  }  
	
  Edit = (item) => { 
	$("#modal").modal('show'); 
	this.setState({  
	  id: item.id,  
	  nama: item.nama,  
	  jumlah: item.jumlah,  
	  action: "update"  
	});  
  }  
	
  Drop = (index) => {  
	let temp = this.state.belanja;    
	temp.splice(index,1);  
	this.setState({belanja: temp});  
  }  
  
	render(){  
    	    return (  
				<div class="  p-5 mb-5 text-black">
    	      <div className="container">  
    	        { /* generate list */ }  
    	        <ul className="list-group">  
    	          {this.state.belanja.map((item,index) => {  
    	            return (  
    	              <li className="list-group-item" key={index}>  
    	                <h5 className="text-dark">{item.nama}</h5>  
    	                <h6>No: {item.id}</h6>  
    	                <h6>Jumlah: {item.jumlah}</h6>  
    	  
    	                <button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)}  
    	                data-toggle="modal" data-target="#modal">  
    	                  Edit  
    	                </button>  
    	                <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>  
    	                  Hapus  
    	                </button>  
    	              </li>  
                );  
    	          })}  
    	        </ul>  
            <button className="btn btn-sm btn-success m-3" onClick={this.Add}  
    	        data-toggle="modal" data-target="#modal">  
    	          + Tambah Barang 
    	        </button>  
    	  
    	        { /* elemen form modal */ }  
    	        <div className="modal fade" id="modal">  
    	          <div className="modal-dialog">  
    	            <div className="modal-content">  
    	              <div className="modal-header bg-success text-white">  
    	                <h5>Form Belanja</h5>  
    	              </div>  
    	              <form onSubmit={this.Simpan}>  
    	              <div className="modal-body">  
    	                No 
    	                <input type="text" name="id" className="form-control" onChange={this.bind}  
    	                value={this.state.id} />  
    	                Barang  
    	                <input type="text" name="nama" className="form-control" onChange={this.bind}  
    	                value={this.state.nama} />  
    	                Jumlah  
    	                <input type="text" name="jumlah" className="form-control" onChange={this.bind}  
    	                value={this.state.jumlah} />  
    	              </div>  
    	              <div className="modal-footer">  
    	                <button type="submit" className="btn btn-success">  
    	                  Simpan  
    	                </button>  
    	              </div>  
    	              </form>  
    	            </div>  
    	          </div>  
    	        </div>  
    	      </div>
			  </div>
			    
    	    );  
          }
        }
export default List;