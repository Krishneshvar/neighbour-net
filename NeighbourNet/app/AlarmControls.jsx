import { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet, Platform, Dimensions } from "react-native"
import { Picker } from "@react-native-picker/picker"

export default function AlarmControls() {
  const [timeout, setTimeout] = useState("30 seconds")
  const [falseAlarmPressed, setFalseAlarmPressed] = useState(false)
  const [escalatePressed, setEscalatePressed] = useState(false)

  const handlePressIn = (buttonType) => {
    if (buttonType === "false") {
      setFalseAlarmPressed(true)
    } else {
      setEscalatePressed(true)
    }
  }

  const handlePressOut = (buttonType) => {
    if (buttonType === "false") {
      setFalseAlarmPressed(false)
    } else {
      setEscalatePressed(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.controlsContainer}>
        <Text style={styles.title}>Alarm Controls</Text>

        <TouchableOpacity
          style={[styles.button, styles.falseAlarmButton, falseAlarmPressed && styles.buttonPressed]}
          activeOpacity={0.8}
          onPressIn={() => handlePressIn("false")}
          onPressOut={() => handlePressOut("false")}
        >
          <Text style={styles.buttonText}>Mark False Alarm</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.escalateButton, escalatePressed && styles.buttonPressed]}
          activeOpacity={0.8}
          onPressIn={() => handlePressIn("escalate")}
          onPressOut={() => handlePressOut("escalate")}
        >
          <Text style={styles.buttonText}>Escalate Alarm</Text>
        </TouchableOpacity>

        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Alarm Escalation Timeout</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={timeout}
              onValueChange={(itemValue) => setTimeout(itemValue)}
              style={styles.picker}
              itemStyle={styles.pickerItem}
            >
              <Picker.Item label="15 seconds" value="15 seconds" />
              <Picker.Item label="30 seconds" value="30 seconds" />
              <Picker.Item label="60 seconds" value="60 seconds" />
            </Picker>
          </View>
        </View>
      </View>
    </View>
  )
}

const { width } = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#2c3e50",
    textAlign: "center",
  },
  controlsContainer: {
    width: width > 500 ? "70%" : "90%",
    display: "flex",
    justifyContent: "center",
    alignItems : "center",
    maxWidth: 400,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  button: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  falseAlarmButton: {
    flex: 1,
    backgroundColor: "#2ecc71",
    paddingRight: 8,
    paddingLeft: 8,
  },
  escalateButton: {
    backgroundColor: "#e74c3c",
    paddingRight: 8,
    paddingLeft: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  pickerContainer: {
    marginTop: 8,
  },
  pickerLabel: {
    fontSize: 18,
    marginBottom: 12,
    fontWeight: "600",
    textAlign: "center",
    color: "#34495e",
  },
  pickerWrapper: {
    backgroundColor: "#f1f2f6",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#dfe4ea",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  pickerItem: {
    fontSize: 16,
  },
})
