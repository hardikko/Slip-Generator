const Slip = require("../models/slip-model");

const AddSlip = async (req, res) => {
  try {
    // Extract slip data from the request body
    const { 
      slip_no, 
      slip_address, 
      slip_date, 
      slip_gstin, 
      slip_transport, 
      slip_lrno, 
      slip_deliveryto, 
      slip_totalbale, 
      slip_items, 
      remark 
    } = req.body;

    // Create a new Slip instance
    const newSlip = new Slip({
      slip_no,
      slip_address,
      slip_date,
      slip_gstin,
      slip_transport,
      slip_lrno,
      slip_deliveryto,
      slip_totalbale,
      slip_items,
      remark
    });

    // Save the new slip to the database
    const savedSlip = await newSlip.save();

    // Send a response with the saved slip
    res.status(201).json({
      message: 'Slip added successfully',
      slip: savedSlip
    });
  } catch (error) {
    console.error('Error adding slip:', error);
    res.status(500).json({
      message: 'Error adding slip',
      error: error.message
    });
  }
};

const ViewSlip = async (req, res) => {
  try {
    const slipNo = req.params.slip_no;
    const slip = await Slip.findOne({ slip_no: slipNo });

    if (!slip) {
      return res.status(404).json({ message: "Slip not found" });
    }

    res.status(200).json(slip);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


module.exports = {
  AddSlip,
  ViewSlip
};
