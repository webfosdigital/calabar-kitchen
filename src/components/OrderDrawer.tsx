import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle2, MessageSquare, Truck, Store } from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_PROFILE } from '../data/restaurantData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [selectedZoneIndex, setSelectedZoneIndex] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<{
    orderId: string;
    total: number;
    items: CartItem[];
  } | null>(null);

  if (!isOpen) return null;

  const itemsSubtotal = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  const deliveryFee = deliveryType === 'delivery'
    ? RESTAURANT_PROFILE.deliveryZones[selectedZoneIndex]?.fee || 0
    : 0;

  const grandTotal = itemsSubtotal + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const orderId = `CK-ORD-${Math.floor(10000 + Math.random() * 90000)}`;
      setCompletedOrder({
        orderId,
        total: grandTotal,
        items: [...cartItems],
      });
      setIsSubmitting(false);
      onClearCart();
    }, 600);
  };

  const handleWhatsAppOrder = () => {
    const orderItemsSummary = (completedOrder ? completedOrder.items : cartItems)
      .map(
        (i) =>
          `• ${i.dish.name} ${i.selectedSwallow ? `(with ${i.selectedSwallow})` : ''} x${i.quantity} — ₦${(i.unitPrice * i.quantity).toLocaleString()}`
      )
      .join('\n');

    const orderId = completedOrder ? completedOrder.orderId : `CK-ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    const totalToPay = completedOrder ? completedOrder.total : grandTotal;

    const msg = encodeURIComponent(
      `Hello Calabar Kitchen, I want to place an order from your website!\n\n` +
      `Order Ref: ${orderId}\n` +
      `Customer Name: ${customerName || 'Customer'}\n` +
      `Phone: ${customerPhone || 'Not specified'}\n` +
      `Order Type: ${deliveryType === 'delivery' ? 'Dispatch Delivery' : 'Pickup at 41 Ikwerre Road'}\n` +
      (deliveryType === 'delivery' ? `Destination: ${deliveryAddress} (${RESTAURANT_PROFILE.deliveryZones[selectedZoneIndex]?.zone})\n` : '') +
      (specialInstructions ? `Notes: ${specialInstructions}\n` : '') +
      `\nItems Ordered:\n${orderItemsSummary}\n\n` +
      `Items Subtotal: ₦${itemsSubtotal.toLocaleString()}\n` +
      (deliveryType === 'delivery' ? `Delivery Fee: ₦${deliveryFee.toLocaleString()}\n` : '') +
      `TOTAL AMOUNT: ₦${totalToPay.toLocaleString()}\n\n` +
      `Please confirm meal preparation and payment instructions.`
    );

    window.open(`https://wa.me/${RESTAURANT_PROFILE.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#DFD7CB] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="px-5 sm:px-6 py-4 sm:py-5 border-b border-[#E8E2D8] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#B84A12]" />
              <h2 className="font-display text-xl font-semibold text-[#1E1B18]">
                {completedOrder ? 'Order Confirmed' : 'Your Order Bag'}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#6C6357] hover:text-[#1E1B18] hover:bg-[#F2EDE4] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 sm:space-y-6">
            {completedOrder ? (
              <div className="text-center py-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-[#22673B]/10 text-[#22673B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#1E1B18] mb-1">
                  Order Received!
                </h3>
                <p className="text-sm text-[#5C5348] mb-4">
                  Our kitchen at 41 & 42 Ikwerre Road is preparing your meal.
                </p>

                <div className="bg-white rounded-xl border border-[#DFD7CB] p-4 text-left text-sm mb-6 space-y-2.5">
                  <div className="flex justify-between">
                    <span className="text-[#6B6155]">Order Number</span>
                    <span className="font-mono font-bold text-[#B84A12]">{completedOrder.orderId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B6155]">Total Amount</span>
                    <span className="font-bold text-[#1E1B18] tabular-nums">₦{completedOrder.total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B6155]">Delivery Method</span>
                    <span className="text-[#1E1B18] capitalize font-medium">{deliveryType}</span>
                  </div>
                  <p className="text-xs text-[#7A7064] pt-2 border-t border-[#ECE6DB]">
                    Payment can be made via Cash on Delivery or Direct Bank Transfer to the dispatch rider upon delivery.
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full py-3.5 bg-[#22673B] text-white font-medium rounded-lg hover:bg-[#1A522E] transition-colors flex items-center justify-center gap-2 text-sm shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Track / Confirm via WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      setCompletedOrder(null);
                      onClose();
                    }}
                    className="w-full py-2.5 border border-[#DFD7CB] text-[#4A4136] text-xs font-medium rounded-lg hover:bg-white transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-[#EFEAE1] text-[#9A9083] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#1E1B18] mb-1">
                  Your order bag is empty
                </h3>
                <p className="text-xs text-[#6C6357] max-w-xs mx-auto mb-6">
                  Explore our hot Afang soup, authentic White soup, or spicy 404 pepper soup and add portions to your bag.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-[#B84A12] text-white text-xs font-semibold rounded-lg hover:bg-[#9E3E0E] transition-colors"
                >
                  Browse Menu Dishes
                </button>
              </div>
            ) : (
              <>
                {/* Itemized List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#7A7064] pb-2 border-b border-[#E8E2D8]">
                    <span>Selected Items ({cartItems.length})</span>
                    <button
                      onClick={onClearCart}
                      className="text-red-700 hover:underline text-[11px]"
                    >
                      Clear All
                    </button>
                  </div>

                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl border border-[#E2DBD0] p-3.5 flex gap-3 items-center justify-between"
                    >
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-semibold text-[#1E1B18] truncate">
                          {item.dish.name}
                        </h4>
                        {item.selectedSwallow && (
                          <p className="text-xs text-[#7C3F10] truncate">
                            + {item.selectedSwallow}
                          </p>
                        )}
                        <p className="text-xs font-medium text-[#1E1B18] mt-0.5 tabular-nums">
                          ₦{(item.unitPrice * item.quantity).toLocaleString()}
                        </p>
                      </div>

                      {/* Stepper controls */}
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center border border-[#DFD7CB] rounded-lg bg-[#FAF8F5]">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:bg-[#ECE6DB] text-[#4A4136] transition-colors rounded-l-lg"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2.5 text-xs font-semibold tabular-nums text-[#1E1B18]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:bg-[#ECE6DB] text-[#4A4136] transition-colors rounded-r-lg"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1.5 text-[#9A9083] hover:text-red-600 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery Type Toggle */}
                <div className="pt-2">
                  <label className="block text-xs font-semibold text-[#3A322A] uppercase tracking-wider mb-2">
                    Fulfillment Preference
                  </label>
                  <div className="grid grid-cols-2 gap-2 bg-[#EFEAE1] p-1 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setDeliveryType('delivery')}
                      className={`py-2 text-xs font-medium rounded-md flex items-center justify-center gap-1.5 transition-colors ${
                        deliveryType === 'delivery'
                          ? 'bg-white text-[#1E1B18] shadow-xs'
                          : 'text-[#5C5348] hover:text-[#1E1B18]'
                      }`}
                    >
                      <Truck className="w-3.5 h-3.5 text-[#B84A12]" />
                      <span>Dispatch Delivery</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryType('pickup')}
                      className={`py-2 text-xs font-medium rounded-md flex items-center justify-center gap-1.5 transition-colors ${
                        deliveryType === 'pickup'
                          ? 'bg-white text-[#1E1B18] shadow-xs'
                          : 'text-[#5C5348] hover:text-[#1E1B18]'
                      }`}
                    >
                      <Store className="w-3.5 h-3.5 text-[#B84A12]" />
                      <span>Self Pickup (Free)</span>
                    </button>
                  </div>
                </div>

                {/* Checkout details form */}
                <form id="checkout-form" onSubmit={handleCheckout} className="space-y-3.5 pt-2">
                  <div>
                    <label className="block text-xs font-medium text-[#4A4136] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Kenneth Briggs"
                      className="w-full px-3 py-2 bg-white border border-[#D5CDC0] rounded-lg text-xs text-[#1E1B18] focus:outline-none focus:ring-1 focus:ring-[#B84A12]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#4A4136] mb-1">
                      Phone Number (for dispatch call) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="e.g. 09016607242"
                      className="w-full px-3 py-2 bg-white border border-[#D5CDC0] rounded-lg text-xs text-[#1E1B18] focus:outline-none focus:ring-1 focus:ring-[#B84A12]"
                    />
                  </div>

                  {deliveryType === 'delivery' ? (
                    <>
                      <div>
                        <label className="block text-xs font-medium text-[#4A4136] mb-1">
                          Port Harcourt Area / Zone *
                        </label>
                        <select
                          value={selectedZoneIndex}
                          onChange={(e) => setSelectedZoneIndex(parseInt(e.target.value))}
                          className="w-full px-3 py-2 bg-white border border-[#D5CDC0] rounded-lg text-xs text-[#1E1B18] focus:outline-none focus:ring-1 focus:ring-[#B84A12]"
                        >
                          {RESTAURANT_PROFILE.deliveryZones.map((z, idx) => (
                            <option key={z.zone} value={idx}>
                              {z.zone} {z.fee > 0 ? `(+₦${z.fee.toLocaleString()})` : '(Free)'}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#4A4136] mb-1">
                          Delivery Street Address & Landmark *
                        </label>
                        <textarea
                          required
                          rows={2}
                          value={deliveryAddress}
                          onChange={(e) => setDeliveryAddress(e.target.value)}
                          placeholder="e.g. Flat 4, 18 Tombia Street, New GRA, near Market Square"
                          className="w-full px-3 py-2 bg-white border border-[#D5CDC0] rounded-lg text-xs text-[#1E1B18] focus:outline-none focus:ring-1 focus:ring-[#B84A12]"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="p-3 bg-[#EFEAE1] rounded-lg text-xs text-[#5A5044]">
                      <p className="font-semibold text-[#1E1B18] mb-0.5">Pickup Location:</p>
                      <p>Calabar Kitchen, 41 & 42 Ikwerre Road, Port Harcourt.</p>
                      <p className="text-[11px] text-[#7A7064] mt-1">Ready within 25–30 minutes after order placement.</p>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-[#4A4136] mb-1">
                      Preparation Notes (Optional)
                    </label>
                    <input
                      type="text"
                      value={specialInstructions}
                      onChange={(e) => setSpecialInstructions(e.target.value)}
                      placeholder="e.g. Extra hot pepper in the 404, or pack swallow separately."
                      className="w-full px-3 py-2 bg-white border border-[#D5CDC0] rounded-lg text-xs text-[#1E1B18] focus:outline-none focus:ring-1 focus:ring-[#B84A12]"
                    />
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Footer Subtotal & Action Bar */}
          {!completedOrder && cartItems.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-[#E8E2D8] bg-white space-y-3">
              <div className="space-y-1.5 text-xs text-[#6B6155]">
                <div className="flex justify-between">
                  <span>Food Items Subtotal</span>
                  <span className="font-medium text-[#1E1B18] tabular-nums">
                    ₦{itemsSubtotal.toLocaleString()}
                  </span>
                </div>
                {deliveryType === 'delivery' && (
                  <div className="flex justify-between">
                    <span>Dispatch Delivery Fee</span>
                    <span className="font-medium text-[#1E1B18] tabular-nums">
                      ₦{deliveryFee.toLocaleString()}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-[#1E1B18] pt-2 border-t border-[#ECE6DB]">
                  <span>Total Amount</span>
                  <span className="text-[#B84A12] tabular-nums">
                    ₦{grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 pt-2">
                <button
                  type="submit"
                  form="checkout-form"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#B84A12] text-white font-medium rounded-lg hover:bg-[#9E3E0E] active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-sm shadow-sm"
                >
                  <span>{isSubmitting ? 'Placing Order...' : 'Confirm Order (Pay on Delivery/Transfer)'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="w-full py-2.5 bg-[#22673B] text-white text-xs font-semibold rounded-lg hover:bg-[#1A522E] transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Order Directly via WhatsApp</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
