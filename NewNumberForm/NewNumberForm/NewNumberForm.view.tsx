import React, { useState } from 'react';
import { View, Modal, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker
import { styles } from './NewNumberForm.style';
import { useNewNumberFormLogic } from './NewNumberForm.logic';
// import { API_URL } from '@env';

import axios from 'axios'

type NewQueueFormProps = {
  serviceOptions: {value:string, label: string}[];
  isNumberDisplay: (status:boolean, data:any) => void;
}

const NewNumberForm = () => {
  const [visible, setVisible] = useState(false);
  const [codeNumber, setCodeNumber] = useState('')
  const [serviceName, setServiceName] = useState('')
  const [cusName, setCusName] = useState('')
  const {
    customerService,
    setCustomerService,
    customerName,
    setCustomerName,
    phoneNumber,
    setPhoneNumber,
    email,
    setEmail,
    //handleSubmit,
    handleCancel,
    serviceOptions,
  } = useNewNumberFormLogic();
  const handleSubmit = async  () => {
    if (!customerService || !customerName || !phoneNumber) {
      //alert('Vui lòng điền đầy đủ các trường bắt buộc!');
      return;
    }
    //alert('Số của bạn đã được tạo!');
    setVisible(true);
     console.log('Selected Service:', customerService);
    console.log('phoneNumber:', phoneNumber);
     
    try {
      const response = await fetch("https://intern-chat.dev.altasoftware.vn/api/Assignment", {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({customerName: customerName , Telephone: phoneNumber, status: 0, deviceCode: 'KIO_06',
          serviceCode: customerService, assignmentDate: (new Date()).toISOString(), expireDate: (new Date()).toISOString()}),
      });
      if (response.ok) {
          const data = await response.json();
        console.log(data);
        setCodeNumber(data.code)
        setServiceName(data.serviceName)
        setCusName(data.customerName)
          
      } else {
        console.log(response)
        alert('Bạn không được cập nhật thông tin người khác');
      }
    } catch (error) {
      console.log(error)
      alert('An error occurred while submitting the form.');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CẤP SỐ MỚI</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>* Dịch vụ khách hàng lựa chọn</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={customerService}
            onValueChange={(itemValue) => setCustomerService(itemValue)}
            style={styles.picker}>
            
            <Picker.Item label="Chọn dịch vụ" value="" />
            
            {serviceOptions.map((option, index) => (
              <Picker.Item label={option.serviceName} value={option.serviceCode} key={index} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>* Tên khách hàng</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập họ tên"
          value={customerName}
          onChangeText={setCustomerName}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>* Số điện thoại</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Hủy bỏ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>In số</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true} // Makes the background semi-transparent
        visible={visible}
        animationType="slide" // 'slide', 'fade', or 'none'
        onRequestClose={() => setVisible(false)} // Handles Android back button
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Số thứ tự được cấp</Text>
            <View>
              <Text style={styles.codeNumberText}>{codeNumber}</Text>
            </View>
            <Text style={styles.serviceText}>Dv: {serviceName}</Text>
            <Text style={styles.cusText}>Khách hàng: {cusName}</Text>

            <TouchableOpacity onPress={() => setVisible(false)} style={styles.closeButton}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NewNumberForm;
