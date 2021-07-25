import React from 'react'
import jsPDF from 'jspdf'
import { Button } from 'react-bootstrap'
import { AiFillPrinter } from 'react-icons/ai'

const PrintBill = (props) => {

    const { id, name, mobile, email, date, result, total } = props

    const handlePrint = () => {
        const doc = new jsPDF();
        doc.text("BILL DETAILS",90,10)
        doc.text(`Invocie : ${id}`, 10, 20);
        doc.text(`Date : ${date}`, 10, 30);
        doc.text(`Name : ${name}`, 10, 40);
        doc.text(`Mobile : ${mobile}`, 10, 50);
        doc.text(`Email : ${email}`, 10, 60);
        result.map((p, i) => {
            return (
                doc.text(`Product : ${p.name} - price : ${p.price}  -  quantity : ${p.quantity} = ${p.price * p.quantity}`, 10, 70 + (i * 10))
            )
        })
        doc.text(`Total : ${total}`,10,100)
        doc.save("bill.pdf");
    }

    return (
        <Button variant="danger" onClick={handlePrint}><AiFillPrinter />print</Button>
    )
}

export default PrintBill