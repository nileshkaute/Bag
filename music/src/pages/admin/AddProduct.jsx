import React, { useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../../component/admin/AdminNavbar';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    backgroundColor: '#ffffff',
    titleColor: '#000000',
    descriptionColor: '#4a5568',
    priceColor: '#047857',
    buttonColor: '#000000',
    buttonTextColor: '#ffffff',
    tagVisible: false,
    tagText: 'New',
    tagBgColor: '#ef4444',
    tagTextColor: '#ffffff',
  });
  const [imageType, setImageType] = useState('url'); // 'url' or 'upload'

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleImageChange = (e) => {
    if (imageType === 'upload') {
        const file = e.target.files[0];
        if (file) {
             // Create a fake local URL for preview
            const localUrl = URL.createObjectURL(file);
            setFormData({ ...formData, image: localUrl }); 
        }
    } else {
        setFormData({ ...formData, image: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // In a real app with uploads, we'd use FormData here.
      // sending JSON for now.
      await axios.post('http://localhost:5000/api/products', formData);
      alert('Product added successfully!');
      setFormData({
        title: '',
        price: '',
        description: '',
        image: '',
        backgroundColor: '#ffffff',
        titleColor: '#000000',
        descriptionColor: '#4a5568',
        priceColor: '#047857',
        buttonColor: '#000000',
        buttonTextColor: '#ffffff',
        tagVisible: false,
        tagText: 'New',
        tagBgColor: '#ef4444',
        tagTextColor: '#ffffff',
      });
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <AdminNavbar />
      
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left: Form */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Product Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. Wireless Headset"
                required
              />
            </div>

            {/* Price */}
            <div>
               <label className="block text-gray-700 font-medium mb-1">Price (₹)</label>
               <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="2999"
                required
              />
            </div>

             {/* Description */}
             <div>
              <label className="block text-gray-700 font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Product details..."
                required
              />
            </div>

            {/* Image Source Toggle */}
            <div>
                <label className="block text-gray-700 font-medium mb-1">Image Source</label>
                <div className="flex gap-4 mb-2">
                    <button 
                        type="button"
                        onClick={() => setImageType('url')}
                        className={`px-4 py-1 rounded text-sm ${imageType === 'url' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                        Image URL
                    </button>
                    <button 
                         type="button"
                        onClick={() => setImageType('upload')}
                         className={`px-4 py-1 rounded text-sm ${imageType === 'upload' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                        Upload
                    </button>
                </div>
                
                {imageType === 'url' ? (
                     <input
                     type="text"
                     name="image"
                     value={formData.image} // This holds the URL string
                     onChange={handleImageChange}
                     className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     placeholder="https://example.com/image.jpg"
                     required
                   />
                ) : (
                    <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
               
            </div>

            {/* Product Tag Section */}
             <div className="border-t border-b py-4 border-gray-200">
                <label className="block text-gray-700 font-medium mb-2">Product Tag (e.g. New)</label>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="tagVisible"
                            checked={formData.tagVisible}
                            onChange={handleChange}
                            className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="text-sm text-gray-600">Show Tag?</span>
                    </div>

                    {formData.tagVisible && (
                        <>
                            <input
                                type="text"
                                name="tagText"
                                value={formData.tagText}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-3 py-2  text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Tag Text (e.g. New)"
                            />
                            <div className="flex gap-4">
                                <div>
                                    <label className="text-xs text-gray-500 block mb-1">Tag Bg</label>
                                    <input
                                        type="color"
                                        name="tagBgColor"
                                        value={formData.tagBgColor}
                                        onChange={handleChange}
                                        className="h-8 w-14 border-0 p-0 rounded cursor-pointer"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 block mb-1">Tag Text</label>
                                    <input
                                        type="color"
                                        name="tagTextColor"
                                        value={formData.tagTextColor}
                                        onChange={handleChange}
                                        className="h-8 w-14 border-0 p-0 rounded cursor-pointer"
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Color Customization Section */}
            <div>
                <label className="block text-gray-700 font-medium mb-2">Card Customization</label>
                <div className="grid grid-cols-2 gap-4">
                    {/* Background Color */}
                    <div>
                        <label className="text-xs text-gray-500 block mb-1">Background</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="color"
                                name="backgroundColor"
                                value={formData.backgroundColor}
                                onChange={handleChange}
                                className="h-8 w-14 border-0 p-0 rounded cursor-pointer"
                            />
                        </div>
                    </div>
                     {/* Title Color */}
                     <div>
                        <label className="text-xs text-gray-500 block mb-1">Title Color</label>
                        <div className="flex items-center gap-2">
                             <input
                                type="color"
                                name="titleColor"
                                value={formData.titleColor}
                                onChange={handleChange}
                                className="h-8 w-14 border-0 p-0 rounded cursor-pointer"
                            />
                        </div>
                    </div>
                    {/* Price Color */}
                     <div>
                        <label className="text-xs text-gray-500 block mb-1">Price Color</label>
                         <div className="flex items-center gap-2">
                             <input
                                type="color"
                                name="priceColor"
                                value={formData.priceColor}
                                onChange={handleChange}
                                className="h-8 w-14 border-0 p-0 rounded cursor-pointer"
                            />
                        </div>
                    </div>
                     {/* Description Color */}
                     <div>
                        <label className="text-xs text-gray-500 block mb-1">Desc. Color</label>
                         <div className="flex items-center gap-2">
                             <input
                                type="color"
                                name="descriptionColor"
                                value={formData.descriptionColor}
                                onChange={handleChange}
                                className="h-8 w-14 border-0 p-0 rounded cursor-pointer"
                            />
                        </div>
                    </div>
                     {/* Button Color */}
                     <div>
                        <label className="text-xs text-gray-500 block mb-1">Button Color</label>
                         <div className="flex items-center gap-2">
                             <input
                                type="color"
                                name="buttonColor"
                                value={formData.buttonColor}
                                onChange={handleChange}
                                className="h-8 w-14 border-0 p-0 rounded cursor-pointer"
                            />
                        </div>
                    </div>
                     {/* Button Text Color */}
                     <div>
                        <label className="text-xs text-gray-500 block mb-1">Btn Text Color</label>
                         <div className="flex items-center gap-2">
                             <input
                                type="color"
                                name="buttonTextColor"
                                value={formData.buttonTextColor}
                                onChange={handleChange}
                                className="h-8 w-14 border-0 p-0 rounded cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 mt-4"
            >
              Add Product
            </button>

          </form>
        </div>

        {/* Right: Preview */}
        <div className="flex flex-col items-center justify-start sticky top-24">
            <h3 className="text-xl font-bold text-gray-700 mb-6">Live Preview</h3>
            
            {/* Card Preview */}
            <div 
                className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 transform hover:scale-105 relative"
                style={{ backgroundColor: formData.backgroundColor }}
            >
                {/* Tag Overlay */}
                {formData.tagVisible && (
                    <div 
                        className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold shadow-md z-10"
                        style={{ backgroundColor: formData.tagBgColor, color: formData.tagTextColor }}
                    >
                        {formData.tagText || 'New'}
                    </div>
                )}

                {/* Image Area */}
                <div className="h-64 w-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    {formData.image ? (
                        <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-gray-400">No Image</span>
                    )}
                </div>
                
                {/* Content Area */}
                <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                         <h4 
                            className="text-xl font-bold break-words w-2/3"
                            style={{ color: formData.titleColor }}
                         >
                            {formData.title || "Product Title"}
                         </h4>
                         <span 
                            className="text-lg font-semibold"
                            style={{ color: formData.priceColor }}
                         >
                            ₹{formData.price || "0"}
                         </span>
                    </div>
                   
                    <p 
                        className="text-sm leading-relaxed mb-4 break-words"
                        style={{ color: formData.descriptionColor }}
                    >
                        {formData.description || "Product description will appear here..."}
                    </p>

                    <button 
                        className="w-full py-2 rounded-lg font-medium hover:opacity-80 transition"
                        style={{ backgroundColor: formData.buttonColor, color: formData.buttonTextColor }}
                    >
                        Buy Now
                    </button>
                    
                </div>
            </div>
             <p className="mt-4 text-gray-500 text-sm">This is how your product card will appear in the store.</p>
        </div>

      </div>
    </div>
  );
};

export default AddProduct;
