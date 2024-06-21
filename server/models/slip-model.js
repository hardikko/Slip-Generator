const mongoose = require('mongoose');
const { Schema } = mongoose;

const slipItemSchema = new Schema({
  slip_item_quality: { type: String, required: true },
  slip_item_size: { type: String, required: true },
  slip_item_total_piece: { type: Number, required: true }
});

const slipSchema = new Schema({
  slip_code: { type: String, unique: true },
  slip_no: { type: String, required: true },
  slip_address: { type: String, required: true },
  slip_date: { type: Date, required: true },
  slip_gstin: { type: String, required: true },
  slip_transport: { type: String, required: true },
  slip_lrno: { type: String, required: true },
  slip_deliveryto: { type: String, required: true },
  slip_totalbale: { type: Number, required: true },
  slip_items: [slipItemSchema],
  slip_total_pieces: { type: Number, required: false },
  remark: { type: String, required: false }
});

slipSchema.pre('save', async function(next) {
  if (this.isNew) {
    const Slip = mongoose.model('Slip', slipSchema);
    const lastSlip = await Slip.findOne().sort({ _id: -1 });
    if (lastSlip) {
      const lastCode = parseInt(lastSlip.slip_code.slice(1));
      this.slip_code = `S${lastCode + 1}`;
    } else {
      this.slip_code = 'S1';
    }

    // Calculate slip_total_pieces
    this.slip_total_pieces = this.slip_items.reduce((total, item) => total + item.slip_item_total_piece, 0);
  }
  next();
});

const Slip = mongoose.model('Slip', slipSchema);

module.exports = Slip;
