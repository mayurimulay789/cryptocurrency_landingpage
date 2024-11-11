"use client";

import { useState, useEffect } from "react";
import { Card, Progress, Input, Tabs, Button } from "antd";
import { ClockCircleOutlined, WalletOutlined, DollarOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

export default function Fincrypt() {
  const [timeLeft, setTimeLeft] = useState({ days: 6, hours: 3, minutes: 6, seconds: 26 });
  const [usdtRaised, setUsdtRaised] = useState(1220621.18);
  const [usdtGoal, setUsdtGoal] = useState(2020733);
  const [tokenPrice, setTokenPrice] = useState(0.0208);
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState("eth");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const progressPercentage = (usdtRaised / usdtGoal) * 100;

  return (
    <Card
      title="Buy Fincrypt"
      className="w-full max-w-md mx-auto"
      style={{ backgroundColor: "#1f1f1f", color: "white" }}
    >
      <div className="time-left grid grid-cols-4 gap-2 mb-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="time-unit">
            <div style={{ fontSize: "24px", color: "#4caf50" }}>
              {value.toString().padStart(2, "0")}
            </div>
            <div style={{ fontSize: "12px", textTransform: "capitalize" }}>{unit}</div>
          </div>
        ))}
      </div>

      <div className="progress-section mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span>UNTIL PRICE INCREASE</span>
          <span>{progressPercentage.toFixed(2)}%</span>
        </div>
        <Progress percent={progressPercentage} showInfo={false} />
      </div>

      <div className="details space-y-2 mb-4">
        <div className="flex justify-between">
          <span>USDT Raised:</span>
          <span>${usdtRaised.toLocaleString()} / ${usdtGoal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Your purchased $FINCRYPT:</span>
          <span>0 <ClockCircleOutlined /></span>
        </div>
        <div className="flex justify-between">
          <span>Your stakeable $FINCRYPT:</span>
          <span>0 <ClockCircleOutlined /></span>
        </div>
        <div className="text-center font-semibold">
          1 $FINCRYPT = ${tokenPrice.toFixed(4)}
        </div>
      </div>

      <Tabs defaultActiveKey="eth" onChange={setSelectedPayment} className="payment-tabs mb-4">
        <TabPane tab="ETH" key="eth" />
        <TabPane tab="USDT" key="usdt" />
        <TabPane tab="USDC" key="usdc" />
        <TabPane tab="BTC" key="btc" />
      </Tabs>

      <div className="purchase-inputs flex space-x-2 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">
            {selectedPayment.toUpperCase()} you pay
          </label>
          <Input
            type="number"
            placeholder="0"
            value={purchaseAmount}
            onChange={(e) => setPurchaseAmount(Number(e.target.value))}
            style={{ backgroundColor: "#333", color: "white" }}
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">$FINCRYPT you receive</label>
          <Input
            type="number"
            placeholder="0"
            value={(purchaseAmount / tokenPrice).toFixed(2)}
            readOnly
            style={{ backgroundColor: "#333", color: "white" }}
          />
        </div>
      </div>

      <div className="purchase-actions space-y-2">
        <Button type="primary" block style={{ backgroundColor: "#4caf50", borderColor: "#4caf50" }}>
          <WalletOutlined /> Connect Wallet
        </Button>
        <Button block type="default" style={{ borderColor: "#4caf50", color: "#4caf50" }}>
          <DollarOutlined /> Buy with {selectedPayment.toUpperCase()}
        </Button>
      </div>

      <div className="text-center mt-4">
        <a href="#" style={{ color: "#4caf50" }}>
          Don't have a wallet?
        </a>
      </div>

      <div className="text-center text-xs mt-4">
        powered by <span className="font-semibold">Web3Payments</span>
      </div>
    </Card>
  );
}
