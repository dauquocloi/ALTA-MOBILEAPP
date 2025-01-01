import { useState } from 'react';

export const useNewNumberFormLogic = () => {
  const [customerService, setCustomerService] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const serviceOptions = [
  {
    "key": "205",
    "serviceCode": "205",
    "serviceName": "Khám hô hấp",
    "description": "Khám hô hấp",
    "isInOperation": "Active"
  },
  {
    "key": "206",
    "serviceCode": "206",
    "serviceName": "Khám tổng quát",
    "description": "Khám tổng quát",
    "isInOperation": "Active"
  },
  {
    "key": "208",
    "serviceCode": "208",
    "serviceName": "Khoa Truyền nhiễm",
    "description": "Khoa Truyền nhiễm",
    "isInOperation": "InActive"
  },
  {
    "key": "210",
    "serviceCode": "210",
    "serviceName": "Khoa xét nghiệm huyết học",
    "description": "Khoa xét nghiệm huyết học",
    "isInOperation": "Active"
  },
  {
    "key": "209",
    "serviceCode": "209",
    "serviceName": "Khoa Da Liễu",
    "description": "Khoa Da Liễu",
    "isInOperation": "InActive"
  },
  {
    "key": "203",
    "serviceCode": "203",
    "serviceName": "Khám răng hàm mặt",
    "description": "Khám răng hàm mặt",
    "isInOperation": "Active"
  },
  {
    "key": "204",
    "serviceCode": "204",
    "serviceName": "Khám Miệng",
    "description": "Khám Mắt",
    "isInOperation": "Active"
  },
  {
    "key": "207",
    "serviceCode": "207",
    "serviceName": "Khoa Dị ứng",
    "description": "Khoa Dị ứng",
    "isInOperation": "Active"
  },
  {
    "key": "212",
    "serviceCode": "212",
    "serviceName": "Khoa Nội thận – tiết niệu.",
    "description": "Khám Nội thận – tiết niệu.",
    "isInOperation": "Active"
  },
  {
    "key": "222",
    "serviceCode": "222",
    "serviceName": "Khoa Da Liễu",
    "description": "2222",
    "isInOperation": "Active"
  }
]
  const handleCancel = () => {
    setCustomerService('');
    setCustomerName('');
    setPhoneNumber('');
    setEmail('');
  };

  return {
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
  };
};
